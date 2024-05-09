import { cardAnalytics } from '@/utils/constants'
import Card from '../Card'

const CardContainer = () => {
  return (
    <section className="card-container">
      {cardAnalytics.map(({title, figure, Icon}) => (
        <Card key={title} title={title} figure={figure} Icon={Icon} />
      ))}
    </section>
  )
}

export default CardContainer