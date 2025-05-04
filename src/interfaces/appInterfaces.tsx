export interface PaginationProps {
  page: number;
  hasMore: boolean;
  onSearch: () => void;
  onNextPage: () => void;
  onPreviousPage: () => void;
}
