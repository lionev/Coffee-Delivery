import data from '../../../../data/Coffes.json'
import { CoffeeCard } from '../CoffeeCard';

export function CoffeeList() {
  return data.map((coffe) => <CoffeeCard key={coffe.name} name={coffe.name} description={coffe.description} price={coffe.price} image={coffe.image} tag={coffe.tag} />);
}