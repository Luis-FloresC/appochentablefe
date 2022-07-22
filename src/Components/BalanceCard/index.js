import { toCurrency } from '../../Utilities/Currency';

const BalanceCard = ({ type, documents, amount }) => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col w-full border-opacity-50 mt-0 p-4 ">
       
          <div className="stats stats-vertical lg:stats-horizontal shadow bg-base-500">

            <div className="stat">
              <div className="stat-title text-white">{type}</div>
              <div className="stat-value text-primary">{toCurrency(amount)}</div>
              <div className="stat-desc text-yellow-50">Cantidad: {documents}</div>
            </div>

          </div>
        
        <div className="divider">O</div>
      </div>
    </div>
  );
}
export default BalanceCard;
