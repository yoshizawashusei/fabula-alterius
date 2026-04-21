import { create } from 'zustand';

interface LocationState {
  currentLocation: string;
  moveTo: (to: string) => void;
}

const useLocation = create<LocationState>((set) => ({
  currentLocation: '初期地点',
  moveTo: (to: string) => set({ currentLocation: to }),
}));

export default function App() {
  const currentLocation = useLocation((state) => state.currentLocation);
  const moveTo = useLocation((state) => state.moveTo);
  return (
    <>
      <span>現在地:{currentLocation}</span>
      <div
        onClick={() => {
          moveTo('2つめの地点');
        }}
      >
        2つめの地点に移動
      </div>
    </>
  );
}
