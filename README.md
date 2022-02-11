<h1 align="center">Whoowesme</h1>
<div>
    <p align="center">:construction: This project is still a work in progress :construction:</p><br/>
</div>
<div>
<u>Note:</u> This project is for educational purpose only. Please do not use it for production.

Suppose, I gave you 100 THB, since I am generous I forget to ask. This
app will force me to ask for that borrowed money to my friend.

Planned features are:

- Keep track of borrowed money
- Show total money borrowed
- Show borrowed to whom
- When was it borrowed

</div>

How to get the project up and running for local development?

<details><summary>Docker Setup for Development</summary>

**Local Development Domains:**

| Title             | URL                                |
| ----------------- | ---------------------------------- |
| Frontend          | http://whoowesme.local             |
| API               | http://api.whoowesme.local         |
| API Documentation | http://api.whoowesme.local/api/    |
| Traefik proxy     | http://localhost:8080/dashboard/#/ |

Open `/etc/hosts` and enter `127.0.0.1 whoowesme.local api.whoowesme.local`

After that, run docker commands shared below sequentially from project root directory.

```bash
# Create external network
$ docker network create web

# Create external volume
$ docker volume create whodata

# Run docker containers
$ docker-compose up -d
```

Wait for containers to get up and running.

Check again to make sure that all containers are running fine without errors

```bash
$ docker ps --format="{{ .ID }}, {{ .Status}} - {{ .Names }}"

## Output
d3a37ed238db, Up 47 minutes - whodbtest
c6d1c618da1c, Up 47 minutes - whoapi
82d2392849eb, Up 47 minutes - whofrontend
c6b1760adaca, Up 47 minutes - whodb
33f05dc01a63, Up 47 minutes - whotraefik
```

If you see output similar to above then it means container are running fine.

#### Test API Connection
Run curl command. It should return response.

```bash
### Request
curl --location --request GET 'http://api.whoowesme.local/v1'

### Response
{
    "status": "OK",
    "version": "0.5.4"
}
```

### Test Frontend
open `http://whoowesme.local` it should show UI.

### In case of Error
You can check docker logs by using below commands. Since errors can vary, I did not mention specific errors here. If you encounter any error please feel free to open issue in repo. While opening issue please share screenshot of the error message too along with some context on how you got it.

Frontend: `docker logs whofrontend`.
API: `docker logs whoapi`

For UI, `docker logs whofrontend` should show output similar to what is shown below

```bash
Compiled successfully!

You can now view who-ui in the browser.

  Local:            http://localhost:8000
  On Your Network:  http://172.19.0.4:8000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

For API, `docker logs whoapi` wait for output similar as shown below

```bash
[Nest] 143   - 02/11/2022, 4:56:46 AM   [NestFactory] Starting Nest application...
[Nest] 143   - 02/11/2022, 4:56:46 AM   [InstanceLoader] PassportModule dependencies initialized +225ms
[Nest] 143   - 02/11/2022, 4:56:46 AM   [InstanceLoader] TypeOrmModule dependencies initialized +0ms
[Nest] 143   - 02/11/2022, 4:56:46 AM   [InstanceLoader] LoggerModule dependencies initialized +2ms
[Nest] 143   - 02/11/2022, 4:56:46 AM   [InstanceLoader] ConfigHostModule dependencies initialized +0ms
[Nest] 143   - 02/11/2022, 4:56:46 AM   [InstanceLoader] ConfigModule dependencies initialized +2ms
[Nest] 143   - 02/11/2022, 4:56:46 AM   [InstanceLoader] ConfigModule dependencies initialized +0ms
[Nest] 143   - 02/11/2022, 4:56:46 AM   [InstanceLoader] AppModule dependencies initialized +4ms
[Nest] 143   - 02/11/2022, 4:56:46 AM   [InstanceLoader] JwtModule dependencies initialized +1ms
[Nest] 143   - 02/11/2022, 4:56:46 AM   [InstanceLoader] TypeOrmCoreModule dependencies initialized +138ms
[Nest] 143   - 02/11/2022, 4:56:46 AM   [InstanceLoader] TypeOrmModule dependencies initialized +1ms
[Nest] 143   - 02/11/2022, 4:56:46 AM   [InstanceLoader] TypeOrmModule dependencies initialized +0ms
... <Removed manually to keep it short>
... <Removed manually to keep it short>
[Nest] 143   - 02/11/2022, 4:56:46 AM   [RouterExplorer] Mapped {/v1/transactions/:id, GET} route
[Nest] 143   - 02/11/2022, 4:56:46 AM   [RouterExplorer] Mapped {/v1/transactions, POST} route
[Nest] 143   - 02/11/2022, 4:56:46 AM   [RouterExplorer] Mapped {/v1/transactions/:id, DELETE} route
[Nest] 143   - 02/11/2022, 4:56:46 AM   [RouterExplorer] Mapped {/v1/transactions/:id, PATCH} route
[Nest] 143   - 02/11/2022, 4:56:46 AM   [RoutesResolver] AuthController {/v1/auth}:
[Nest] 143   - 02/11/2022, 4:56:46 AM   [RouterExplorer] Mapped {/v1/auth/login, POST} route
[Nest] 143   - 02/11/2022, 4:56:46 AM   [RoutesResolver] UsersController {/v1/users}:
[Nest] 143   - 02/11/2022, 4:56:46 AM   [RouterExplorer] Mapped {/v1/users, GET} route
[Nest] 143   - 02/11/2022, 4:56:46 AM   [RouterExplorer] Mapped {/v1/users/me, GET} route
[Nest] 143   - 02/11/2022, 4:56:46 AM   [RouterExplorer] Mapped {/v1/users/register, POST} route
[Nest] 143   - 02/11/2022, 4:56:46 AM   [RouterExplorer] Mapped {/v1/users, PATCH} route
[Nest] 143   - 02/11/2022, 4:56:46 AM   [RouterExplorer] Mapped {/v1/users/change-password, POST} route
[Nest] 143   - 02/11/2022, 4:56:46 AM   [NestApplication] Nest application successfully started
[Nest] 143   - 02/11/2022, 4:56:46 AM   Application running at http://[::1]:5001/v1
```

[Traefik](https://doc.traefik.io) dashboard is available at : `http://localhost:8080/dashboard/#/`

</details>

<details><summary>Documentations </summary>

- <a href="frontend/README.md">Frontend docs</a>
- <a href="backend/README.md">Backend docs</a>
</details>

#### License

MIT
