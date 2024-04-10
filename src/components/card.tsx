import { FC } from 'react'
import clsx from 'clsx'
import styles from './card.module.scss'

type CardProps = {
    text: string
    title: string
    isActive?: boolean
    onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
    className?: string
}

export const Card: FC<CardProps> = ({ text, title, onClick = () => { }, isActive, className }) => {
    const cardClasses = clsx(
        styles['card-container'],
        isActive ? styles[`card-container_active`] : null,
        className,
    )
    return (
        <div className={cardClasses}
            onClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => onClick(e)}>
            <div className={styles['card-content']}>
                <div className={styles['card-header']}>
                    {title}
                </div>
                <div className={styles['card-body']}>
                    {text}
                </div>
            </div>
        </div>
    )
}