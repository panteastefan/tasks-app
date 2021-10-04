export interface User {
  id: number;
  name: string;
  userName: string;
  tasks: Set<Task>;
}
