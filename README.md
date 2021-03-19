<h1 align="center">Whoowesme</h1>
<div>
    <p align="center">:construction: This project is still a work in progress :construction:</p><br/>
</div>
<div>
_Note:_ This project is for educational purpose only. Please do not use it for production.

Suppose, I gave you 100 THB, since I am generous I forget to ask. This
app will force me to ask for that borrowed money to my friend.

Planned features are:

- Keep track of borrowed money
- Show total money borrowed
- Show borrowed to whom
- When was it borrowed
</div>

How to get the project up and running for local development

<details><summary>Docker Setup for Development</summary>

**Local Development Domains:**

| Title    | URL                        |
| -------- | -------------------------- |
| Frontend | http://whoowesme.local     |
| API      | http://api.whoowesme.local |

Open `/etc/hosts` and enter `127.0.0.1 whoowesme.local api.whoowesme.local`

After that, run below docker commands from project root directory

Create external network that will be used for networking.

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
95e54e9831aa, Up 25 minutes - whoapi
7962b6101979, Up 39 minutes - whofrontend
4586684c2c27, Up 39 minutes - whodb
3b9119ae6b48, Up 39 minutes - whotraefik
```

If you see output similar to above then it means container are running fine. Visit backend and frontend url to make sure that they are accessible.
you can check `docker logs whoapi` and `docker logs whofrontend` to make container logs in case you have some error.

For UI, `docker logs whofrontend` should show output similar to what is shown below

```bash
You can now view who-ui in the browser.

  Local:            http://localhost:8000
  On Your Network:  http://172.18.0.4:8000

Note that the development build is not optimized.
To create a production build, use npm run build.
```

For API, `docker logs whoapi` wait for output similar as shown below

```bash
[Nest] 27   - 03/19/2021, 8:42:06 PM   [InstanceLoader] TypeOrmCoreModule dependencies initialized +240ms
[Nest] 27   - 03/19/2021, 8:42:06 PM   [InstanceLoader] TypeOrmModule dependencies initialized +2ms
...
...
[Nest] 27   - 03/19/2021, 8:42:06 PM   [RouterExplorer] Mapped {/transactions/:id, DELETE} route +5ms
[Nest] 27   - 03/19/2021, 8:42:06 PM   [RouterExplorer] Mapped {/transactions/:id, PATCH} route +2ms
[Nest] 27   - 03/19/2021, 8:42:06 PM   [RoutesResolver] AuthController {/auth}: +1ms
[Nest] 27   - 03/19/2021, 8:42:06 PM   [RouterExplorer] Mapped {/auth/login, POST} route +2ms
[Nest] 27   - 03/19/2021, 8:42:06 PM   [RoutesResolver] UsersController {/users}: +1ms
[Nest] 27   - 03/19/2021, 8:42:06 PM   [RouterExplorer] Mapped {/users, GET} route +1ms
[Nest] 27   - 03/19/2021, 8:42:06 PM   [RouterExplorer] Mapped {/users/me, GET} route +1ms
[Nest] 27   - 03/19/2021, 8:42:06 PM   [RouterExplorer] Mapped {/users/register, POST} route +2ms
[Nest] 27   - 03/19/2021, 8:42:06 PM   [NestApplication] Nest application successfully started +16ms
```

[Traefik](https://doc.traefik.io) dashboard is available at : `http://localhost:8080/dashboard/#/`

</details>

<details><summary>Documentations </summary>

- <a href="frontend/README.md">Frontend docs</a>
- <a href="backend/README.md">Backend docs</a>
</details>

#### License

MIT
