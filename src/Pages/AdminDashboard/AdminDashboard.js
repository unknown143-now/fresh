import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom'
import Navigation from '../../Components/Navigation/Navigation';
import './AdminDashboard.css'
import Loading from '../../Components/Loading/Loading';
import Notification from '../../Components/Notification/Notification';
import UserDetails from '../../Components/UserDetails/UserDetails';


const AdminDashboard = ({ logOut, notific }) => {
  const [users, setUsers] = useState({
    all: [],
    filtered: [],
  })
  const [loading, setLoading] = useState(true)
  const [notify, setNotify] = useState({
    display: false,
    type: '',
    message: '',
  })
  const [selectedUser, setSelectedUser] = useState({})
  const [page, setPage] = useState('Dashboard')

  const history = useHistory()

  const showNotification = (type, message) => {
    window.scrollTo({ top: 0 })
    setNotify({
      display: true,
      type,
      message,
    })
  }

  const closeNotifiaction = () => {
    setNotify({
      display: false,
      type: '',
      message: '',
    })
  }

  const onSelectUser = (user) => {
    setSelectedUser(user)
    setPage('UserDetails')
  }

  const searchUser = (e) => {
    const searchInput = e.target.value
    const filteredUsers = users.all.filter((user) =>
      user.firstname.toLowerCase().includes(searchInput.toLowerCase())
    )

    setUsers({
      ...users,
      filtered: filteredUsers,
    })
  }

  const displayAdminPage = () => {
    switch (page) {
      case 'Dashboard':
        return (
          <div>
            <section className='transaction'>
              <div className='overlay'>
                <div className='first'>
                  <h1>Admin Dashboard</h1>
                  <div className='search'>
                    <input
                      className='search-box'
                      type='search'
                      name='name-search'
                      id=''
                      placeholder='Search by first name'
                      onChange={searchUser}
                    />
                  </div>
                  <div></div>
                </div>
                <div className='overflow'>
                  <table className='table'>
                    <thead>
                      <tr className='tr'>
                        <th className='th1'>Client</th>
                        <th className='th1'>Email</th>
                        <th className='th'>Amount</th>
                        <th className='th'>Daily Returns</th>
                        <th className='th'></th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.filtered.map((user, i) => (
                        <tr className='tr' key={i}>
                          <td className='td1'>{`${user.firstname} ${user.lastname}`}</td>
                          <td className='td1'>{user.email}</td>
                          <td className='td'>{`$${user.amount}`}</td>
                          <td className='td'>{`$${user.daily_returns}`}</td>
                          <td className='td'>
                            <span
                              style={{
                                cursor: 'pointer',
                                textDecoration: 'underline',
                                color: 'blue',
                              }}
                              onClick={() => {
                                onSelectUser(user)
                              }}
                            >
                              Edit
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </section>
          </div>
        )
      case 'UserDetails':
        return (
          <UserDetails
            selectedUser={selectedUser}
            onNotify={showNotification}
            notific={notific}
            setPage={setPage}
          />
        )
      case 'Withdrawals':
        return <div></div>
      default:
        return <div>no page to display</div>
    }
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/user/profile`)
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setUsers({
            ...users,
            all: data.users,
            filtered: data.users,
          })
          setLoading(false)
        } else {
          logOut()
          setLoading(false)
          history.push('/admin')
        }
      })
      .catch((err) => {
        setLoading(false)
      })
    // eslint-disable-next-line
  }, [page])

  return loading ? (
    <Loading />
  ) : (
    <div className='Admin-dashboard'>
      {notify.display && (
        <Notification
          type={notify.type}
          message={notify.message}
          closeNotify={closeNotifiaction}
        />
      )}
      <Navigation
        page='AdminDashboard'
        adminDashPage='AdminDashboard'
        logAdminOut={logOut}
      />
      {displayAdminPage()}
    </div>
  )
}

export default AdminDashboard;