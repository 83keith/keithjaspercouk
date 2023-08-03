export type Menu = {
  id: number;
  title: string;
  path?: string | null;
  newTab: boolean;
  submenu?: Menu[];
};
