import data from '../../data/Coffes.json'
import { CoffeeCard } from '../CoffeeCard';

export function CoffeeList() {
  return data.map((coffe) => <CoffeeCard key={coffe.name} coffee={coffe} />);
}