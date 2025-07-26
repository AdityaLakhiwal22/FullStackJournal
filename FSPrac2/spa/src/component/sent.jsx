import logo from '../logo.svg';
import './Style.css'; 

function Sent() {
  return (
    <div id="sent">
      <div className='section-title'>Sent</div>
      <div>
        <table>
          <thead> 
            <tr>
              <th>Receiver</th>
              <th>Subject</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody> 
            <tr>
              <td>Faiyaz</td>
              <td>Are faiyaz, read my methodology!</td>
              <td>Jul 25</td>
            </tr>
            <tr>
              <td>Siddh</td>
              <td>Lets have Lunch!</td>
              <td>Jul 24</td>
            </tr>
            <tr>
              <td>Mitesh</td>
              <td>Lets play valorant!</td>
              <td>Jul 23</td>
            </tr>
            <tr>
              <td>Hunter</td>
              <td>Whats your current read, buddy?</td>
              <td>Jul 22</td>
            </tr>
            <tr>
              <td>Dhawal</td>
              <td>"Apna kaam karna"</td>
              <td>Jul 21</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Sent;