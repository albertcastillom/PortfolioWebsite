import styles from "./ScatteredBoard.module.css"

const cardsData = [
    {id: 1, title: 'Card One', x: 10, y: 10, rotate: -25},
    {id: 2, title: 'Card Two', x: 60, y: 10, rotate: 8},
    {id: 3, title: 'Card Three', x: 5, y: 50, rotate: -12},
    {id: 4, title: 'Card Four', x: 65, y: 55, rotate: 4},
]


export default function ScatteredBoard(){
    return (
        <section className={styles.scatteredBoard} aria-label="Project board">
            {cardsData.map((card)=>
                <article key={card.id} className={styles.scatteredCard} style={{top: `${card.y}%`, left: `${card.x}%`, transform: `rotate(${card.rotate}deg)`,}}>
                    <h3>{card.title}</h3>
                    <p>This is a scattered card</p>
                </article>
            )}
        </section>
    )
}
