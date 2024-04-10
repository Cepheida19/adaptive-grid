export type dataCardType = {
    id: string
    title: string
    text: string
    isActive: boolean
}

const data = {
    id: '',
    title: "Lorem Ipsum placeholder text",
    text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
    ut labore et dolore magna aliqua. Vel turpis nunc eget lorem dolor. Vitae purus faucibus ornare 
    suspendisse. Egestas dui id ornare arcu odio ut sem. Dolor morbi non arcu risus quis varius quam. 
    Duis tristique sollicitudin nibh sit. Et ultrices neque ornare aenean. Amet purus gravida quis 
    blandit turpis cursus in. Et egestas quis ipsum suspendisse ultrices gravida.`,
    isActive: false,
}
export const dataArray: dataCardType[] = []

// задаем количество карт, отрисовываемых на странице:
const countOfCards = 12

for (let i = 1; i <= countOfCards; i++) {
    dataArray.push({ ...data, id: String(i) })
}