import { UiTabs, UiTabsList, UiTabsTrigger } from "./Tabs";

type TabsListProps = {
  defaultValue: string;
  tabs: { onClick: () => void; value: string; label: string }[];
};

export const TabsList = ({ defaultValue, tabs }: TabsListProps) => {
  return (
    <UiTabs defaultValue={defaultValue}>
      <UiTabsList>
        {tabs.map((tab, idx) => (
          <UiTabsTrigger key={idx} onClick={tab.onClick} value={tab.value}>
            {tab.label}
          </UiTabsTrigger>
        ))}
      </UiTabsList>
    </UiTabs>
  );
};
