import React from 'react'
import {PropTypes} from 'react'

export const UserRow = ({username, password}) => (
    <tr>
        <td>{username}</td>
        <td>{password}</td>
    </tr>
);

UserRow.propTypes = {
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired
};