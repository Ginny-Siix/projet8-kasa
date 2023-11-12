import './home.css'
import List from '../../data/logements.json'
import Banner from '../../components/Banner/Banner'
import Thumb from '../../components/Thumb/Thumb'


export default function Home() {
console.log(List)
    return (
        <main>
            <Banner />
            <div className="thumb-container">

            {List.map(appart => {
            return <Thumb key={appart.id} appart={appart}  />
        })
        }
            </div>
        </main>
            )
}
