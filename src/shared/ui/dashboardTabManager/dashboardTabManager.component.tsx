import { AsyncWrapper } from "../AsyncWrapper";
import { ErrorAlert } from "../ErrorAlert";
import { TabsList } from "../TabsList";
import { useTabsConfig, type TabsConfigList } from "./tabs.store";

export const DashboardTabManager = <Data extends readonly unknown[]>({
  config,
}: {
  config: TabsConfigList<Data>;
}) => {
  const { data, isError, isLoading, currentTab, tabsConfig } =
    useTabsConfig(config);

  return (
    <div className="flex w-full flex-col gap-6 mt-5 mb-5">
      <TabsList defaultValue={currentTab!} tabs={tabsConfig} />
      <AsyncWrapper
        data={data}
        isLoading={isLoading}
        isError={isError}
        errorSlot={<ErrorAlert errorMessage="Не удалось загрузить данные" />}
      >
        {(component) => component}
      </AsyncWrapper>
    </div>
  );
};
