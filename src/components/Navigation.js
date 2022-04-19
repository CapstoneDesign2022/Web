import React, { Text } from 'react';
import { Link } from 'react-router-dom';
// import { navTheme } from './colors';

const Navigation = () => (
    <nav>
        <ul style={{ display: "flex", justifyContent: "center"}}>
            <li>
                <Link to="/" style={{ marginRight: 10}}>
                    <Text>Home</Text>
                </Link>
            </li>

            <li>
                <Link to="/profile"
                    style={{
                        marginLeft: 10,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        fontSize: 12,
                    }}
                >
                <Text>Profile</Text> 
                    {/*
                    <span style={{ marginTop: 10 }}>
                        { userObj.displayName
                            ? `${userObj.displayName}의 Profile`
                            : "Profile" }
                    </span>
                     */}
                </Link>
            </li>
        </ul>
    </nav>
);

export default Navigation;