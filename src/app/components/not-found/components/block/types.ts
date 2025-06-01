interface BlockListItem {
  key: string;
  label: string;
  wip?: boolean;
  onClick: () => void;
}

export interface BlockProps {
  title: string;
  list: BlockListItem[];
}
