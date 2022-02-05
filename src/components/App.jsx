import UserProfile from './Profile/Profile';
import user from '../user.json';
import Statistics from './Statistics/Statistics';
import data from '../data.json';
import FriendList from './FriendList/FriendList';
import friends from '../friends.json';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import transactions from '../transactions.json';

export default function App (){
  return <div>
  <h2>
    1 - Профиль социальной сети
    <UserProfile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar} 
      stats={user.stats}
      />
  </h2>
  <h2>
      2- Секция статистики
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </h2>
    <h2>
      3 - Список друзей
      <FriendList friends={friends} />
    </h2>
    <h2>
      4 - История транзакций
      <TransactionHistory items={transactions} />
    </h2>
    </div>
}