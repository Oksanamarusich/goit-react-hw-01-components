 
import { Profile } from './Profile/Profile'
import user from '../data/user.json'


import { Statistics } from './Statistics/Statistic'
import data from '../data/data.json';


import { FriendList } from './FriendList/FriendList'
import friends from '../data/friends.json';



import { TransactionHistory } from './Transaction/TransactionHistory';
import transactions from '../data/transactions.json';



export function App() {
    return (<div>
        <Profile
  username={user.username}
  tag={user.tag}
  location={user.location}
  avatar={user.avatar}
  stats={user.stats}
/>
        <Statistics title="Upload stats" stats={data}  />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </div>);
}
