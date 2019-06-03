import React, { Component } from "react";
import { Link } from "react-router-dom";

class Clients extends Component {
  render() {
    const clients = [
      {
        id: "mjgr5",
        firstName: "krystian",
        lastName: "kielar",
        email: "kk@gmail.com",
        phone: "555-555-555",
        balance: "1000000"
      },
      {
        id: "i7ebi8",
        firstName: "Hila",
        lastName: "Sass",
        email: "HS@gmail.com",
        phone: "666-666-666",
        balance: "1000"
      },
      {
        id: "i76viv76",
        firstName: "Amit",
        lastName: "Ras",
        email: "AR@gmail.com",
        phone: "888-888-888",
        balance: "-100"
      }
    ];
    if (clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2>
                {"    "}
                <i className="fas fa-users" />
                Clients{"   "}
              </h2>
            </div>
            <div className="col-md-6" />
          </div>
          <table className="table table-striped">
            <thead className="thead-inverse">
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>balance</th>
                <th />
              </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td>
                    {client.firstName} {client.lastName}
                  </td>
                  <td>{client.email}</td>
                  <td>${parseFloat(client.balance).toFixed(2)}</td>
                  <td>
                    <Link
                      to={`/client/${client.id}`}
                      className="btn btn-secondary btn-sm"
                    >
                      <i className="fas fa-arrow-circle-right" />
                      Details{" "}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1>Loading...</h1>;
    }
  }
}

export default Clients;
