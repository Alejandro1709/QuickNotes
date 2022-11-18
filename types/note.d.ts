export default interface INote {
  id?: number;
  text: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface INoteContextProps {
  children: React.ReactNode;
  notes: INote[];
}

export interface INoteContext {
  initialNotes: INote[];
  handleSetInitialNotes: (notes: INote[]) => void;
  addNote: (note: INote) => void;
}
