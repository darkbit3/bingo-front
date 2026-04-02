

interface BingoModalProps {
  show: boolean;
  currentCall: number | null;
  calledNumbers: number[];
  onClose: () => void;
}

export default function BingoModal({ show, currentCall, calledNumbers, onClose }: BingoModalProps) {
  if (!show) return null;

  // Auto close modal after 5 seconds
  setTimeout(() => {
    onClose();
  }, 5000);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-6 lg:p-8 max-w-sm lg:max-w-md w-full shadow-2xl border-2 border-green-500/50 relative">
        {/* Last Call Number - Top Right Corner */}
        {currentCall && (
          <div className="absolute top-4 right-4 bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 rounded-lg p-2 shadow-xl border-2 border-amber-400/50">
            <div className="text-white text-xs sm:text-sm font-semibold">Last Call</div>
            <div className="text-white text-lg sm:text-xl font-bold">{currentCall}</div>
          </div>
        )}
        
        {/* Player ID and Amount */}
        <div className="text-center mb-4">
          <div className="text-gray-400 text-sm mb-2">Player: P62159</div>
          <div className="text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-4">$440</div>
        </div>
        
        {/* Status Message */}
        <div className="text-center">
          <div className="text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-green-600 mb-3">
            GOOD BINGO!
          </div>
          <div className="text-gray-400 text-sm">
            Last Call: <span className="font-bold text-red-400">{currentCall || ''}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
