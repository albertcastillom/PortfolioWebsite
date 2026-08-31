import styles from "./ScatteredBoard.module.css"

const cardsData = [
    { id: 1, number: '01', title: 'Portfolio', type: 'Web experience', x: 5, y: 8, rotate: -6 },
    { id: 2, number: '02', title: 'Full-stack build', type: 'Case study', x: 63, y: 2, rotate: 5 },
    { id: 3, number: '03', title: 'UI experiment', type: 'Interface study', x: 14, y: 56, rotate: 4 },
    { id: 4, number: '04', title: 'Next project', type: 'In progress', x: 69, y: 51, rotate: -5 },
]


export default function ScatteredBoard(){
    return (
        <div className={styles.scatteredBoard}>
            {cardsData.map((card)=>
                <article key={card.id} className={styles.scatteredCard} style={{top: `${card.y}%`, left: `${card.x}%`, transform: `rotate(${card.rotate}deg)`,}}>
                    <span>{card.number}</span>
                    <h3>{card.title}</h3>
                    <p>{card.type}</p>
                    <span className={styles.cardLink}>View project ↗</span>
                </article>
            )}
        </div>
    )
}
