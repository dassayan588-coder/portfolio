import styles from "./BigDna.module.css";

export default function BigDna() {
  return (
    <div className={styles.bigDnaContainer}>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%" 
        height="100%" 
        viewBox="0 0 40 480" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="1.5" 
        strokeLinecap="round"
      >
        <g opacity="0.3">
          {Array.from({ length: 4 }).map((_, i) => {
            const yOffset = i * 120;
            return (
              <g key={i} transform={`translate(0, ${yOffset})`}>
                <path vectorEffect="non-scaling-stroke" d="M 20 0 C 40 15, 40 45, 20 60 C 0 75, 0 105, 20 120" />
                <path vectorEffect="non-scaling-stroke" d="M 20 0 C 0 15, 0 45, 20 60 C 40 75, 40 105, 20 120" />
                
                <line vectorEffect="non-scaling-stroke" x1="15" y1="10" x2="25" y2="10" />
                <line vectorEffect="non-scaling-stroke" x1="8" y1="20" x2="32" y2="20" />
                <line vectorEffect="non-scaling-stroke" x1="5" y1="30" x2="35" y2="30" />
                <line vectorEffect="non-scaling-stroke" x1="8" y1="40" x2="32" y2="40" />
                <line vectorEffect="non-scaling-stroke" x1="15" y1="50" x2="25" y2="50" />
                
                <line vectorEffect="non-scaling-stroke" x1="25" y1="70" x2="15" y2="70" />
                <line vectorEffect="non-scaling-stroke" x1="32" y1="80" x2="8" y2="80" />
                <line vectorEffect="non-scaling-stroke" x1="35" y1="90" x2="5" y2="90" />
                <line vectorEffect="non-scaling-stroke" x1="32" y1="100" x2="8" y2="100" />
                <line vectorEffect="non-scaling-stroke" x1="25" y1="110" x2="15" y2="110" />
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
