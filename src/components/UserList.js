import React from 'react'
import {PropTypes} from 'react'

import {UserRow} from './UserRow'

export const UserList = ({users}) => {
    return (
        <div className="user-list">
        <table className="table">
            <thead>
            <tr>
                <th>Username</th>
                <th>Password</th>
            </tr>
            </thead>
            <tbody>
            {
                users.map((user, i) =>
                    <UserRow
                        key={i}
                        {...user}
                    />
                )
            }
            </tbody>
        </table>
        </div>
    )
};