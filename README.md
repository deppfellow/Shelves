## REST API Specification

_Hah. What would you like purchase today, my friend?_

<table>
    <thead>
        <tr>
            <th>Endpoint</th>
            <th>HTTP</th>
            <th>Description</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td><code>/relic</code></td>
            <td><code>GET</code></td>
            <td>Retrieve all relic and its information</td>
        </tr>
        <tr>
            <td><code>/relic/:id</code></td>
            <td><code>GET</code></td>
            <td>Retrieve single relic and its information given id</td>
        </tr>
        <tr>
            <td><code>/relic</code></td>
            <td><code>POST</code></td>
            <td>Add new relic into storage</td>
        </tr>
        <tr>
            <td><code>/relic</code></td>
            <td><code>DELETE</code></td>
            <td>Delete all relic and its information</td>
        </tr>
        <tr>
            <td><code>/relic/:id</code></td>
            <td><code>DELETE</code></td>
            <td>Delete single relic and its information given id</td>
        </tr>
        <tr>
            <td><code>/relic/:id</code></td>
            <td><code>PUT</code></td>
            <td>Update the relic information given id</td>
        </tr>
    </tbody>
</table>
