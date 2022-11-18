export default interface INote {
  id: number;
  text: string;
  createdAt: string;
}

export interface INoteContextProps {
  children: React.ReactNode;
}

export interface INoteContext {
  notes: INote[];
  addNote: (note: INote) => void;
  deleteNote: (note: INote) => void;
}
