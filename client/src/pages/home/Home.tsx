import classes from './home.module.scss'
import { useGetTeamsQuery } from '../../redux/services/teamsApi'
import { Preloader } from '../../ui'

const Home = () => {
  const { data, isLoading } = useGetTeamsQuery()
  if (isLoading) return <Preloader />
  return (
    <div>
      {data?.map((item) => (
        <p key={item.id}>
          {item.id}|{item.title}
        </p>
      ))}
    </div>
  )
}

export default Home
