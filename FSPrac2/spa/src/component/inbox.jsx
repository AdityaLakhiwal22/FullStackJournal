import logo from '../logo.svg';
import './Style.css'; 

function Inbox() {
  return (
    <div id="inbox">
      <div className='section-title'>Inbox</div>
      <div>
        <table>
          <thead> 
            <tr>
              <th>Sender</th>
              <th>Subject</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Google</td>
              <td>Security Alert!</td>
              <td>Jul 25</td>
            </tr>
            <tr>
              <td>LinkedIn</td>
              <td>Aditya, You have 69 Unread Messages!</td>
              <td>Jul 24</td>
            </tr>
            <tr>
              <td>Github</td>
              <td>New pull request on your repo</td>
              <td>Jul 23</td>
            </tr>
            <tr>
              <td>Netflix</td>
              <td>Aditya, What are you watching?</td>
              <td>Jul 22</td>
            </tr>
            <tr>
              <td>Goodreads</td>
              <td>New books from Murakami!</td>
              <td>Jul 21</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default Inbox;