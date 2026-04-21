import { create } from 'zustand';

const useLocation = create((set) => ({
  currentLocation: '初期地点',
  moveTo: (to: String) => set({ currentLocation: to }),
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
