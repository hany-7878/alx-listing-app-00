import Card from '../components/common/Card'
import Button from '../components/common/Button'
import { PLACEHOLDER_IMAGE } from '../constants'

export default function Home() {
  return (
    <div className="p-8 ">
      <h1 className="text-2xl font-bold mb-6">ALX Listing App</h1>
      <Card
        title="Beautiful House"
        description="A lovely house in the city center"
        image={PLACEHOLDER_IMAGE}
      />
      <div className="mt-4">
        <Button label="Book Now" onClick={() => alert('Booked!')} />
      </div>
    </div>
  )
}
