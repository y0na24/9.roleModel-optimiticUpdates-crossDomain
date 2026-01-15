import { useDidUpdate } from "@/shared/lib/react/useDidUpdate";
import { useQuery } from "@/shared/lib/react/useQuery";
import { useUrlSearchParam } from "@/shared/lib/react/useSearchParams";

import { useEffect, type ReactNode } from "react";

export type TabConfig<Data> = {
  key: string;
  label: string;
  loader: () => Promise<Data>;
  renderData: (data: Data) => ReactNode;
  isTabHidden?: boolean
};

export type TabsConfigList<Data extends readonly unknown[]> = {
  [K in keyof Data]: TabConfig<Data[K]>;
};

const tabsCache = new Map<string, unknown>();

export const useTabsConfig = <Data extends readonly unknown[]>(
  tabs: TabsConfigList<Data>,
) => {
  const { value: currentTab = "", set } = useUrlSearchParam("tab", tabs[0].key);
  const { data, isLoading, isError, refetch } = useQuery(async () => {
    const { loader, renderData } = tabs.find((tab) => tab.key === currentTab)!;

    if (tabsCache.has(currentTab)) {
      return renderData(tabsCache.get(currentTab));
    }

    const result = await loader();
    tabsCache.set(currentTab, result);

    return renderData(result);
  });

  useDidUpdate(() => {
    refetch();
  }, [currentTab]);

  useEffect(() => {
    return () => tabsCache.clear();
  }, []);

  const tabsConfig = tabs.map((tab) => ({
    label: tab.label,
    onClick: () => set(tab.key),
    value: tab.key,
  }));

  return {
    tabsConfig,
    data,
    isLoading,
    isError,
    currentTab,
  };
};
