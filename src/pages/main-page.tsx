import { FC, useState } from 'react'
import { Card } from '../components/card'
import { dataArray, dataCardType } from '../dataFromBackend'
import Rectangle from './../images/rectangle.png'
import styles from './main-page.module.scss'

export const MainPage: FC = () => {
    const [activeCards, setActiveCards] = useState<dataCardType[]>(dataArray)

    const handleChangeActive = (data: dataCardType) => {
        data.isActive = !data.isActive
        setActiveCards(prevState => [...prevState])
    }

    console.log('activeCards', activeCards)

    return (
        <div className={styles['main-container']}>
            <div className={styles['main-content']}>
                <img className={styles['rectangle']} src={Rectangle} alt="rectangle" />
                {activeCards && activeCards.map(data =>
                    <Card
                        text={data.text}
                        title={data.title}
                        key={data.id}
                        isActive={data.isActive}
                        onClick={() => handleChangeActive(data)}
                        className={styles['card-styles']} />
                )}
            </div>
        </div>
    )
}