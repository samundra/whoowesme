## Introduction

```

   █████   ███   █████ █████                     ███████
  ░░███   ░███  ░░███ ░░███                    ███░░░░░███
   ░███   ░███   ░███  ░███████    ██████     ███     ░░███ █████ ███ █████  ██████   █████
   ░███   ░███   ░███  ░███░░███  ███░░███   ░███      ░███░░███ ░███░░███  ███░░███ ███░░
   ░░███  █████  ███   ░███ ░███ ░███ ░███   ░███      ░███ ░███ ░███ ░███ ░███████ ░░█████
    ░░░█████░█████░    ░███ ░███ ░███ ░███   ░░███     ███  ░░███████████  ░███░░░   ░░░░███
      ░░███ ░░███      ████ █████░░██████     ░░░███████░    ░░████░████   ░░██████  ██████
       ░░░   ░░░      ░░░░ ░░░░░  ░░░░░░        ░░░░░░░       ░░░░ ░░░░     ░░░░░░  ░░░░░░


                               ██████   ██████
                              ░░██████ ██████
                               ░███░█████░███   ██████
                               ░███░░███ ░███  ███░░███
                               ░███ ░░░  ░███ ░███████
                               ░███      ░███ ░███░░░
                               █████     █████░░██████
                              ░░░░░     ░░░░░  ░░░░░░


```

_Note:_ This project is for educational purpose only. Please do not use it for production.

Suppose, I gave you 100 THB, since I am generous I forget to ask. This
app will force me to ask for that borrowed money to my friend.

Planned features are:
- Keep track of borrowed money
- Show total money borrowed
- Show borrowed to whom
- When was it borrowed

### Docker Setup for Development

**Domains:**

- Frontend: http://whoowesme.local
- API: http://api.whoowesme.local

Open `/etc/hosts` and enter `127.0.0.1 whoowesme.local api.whoowesme.local`

After that, run below docker commands from project root directory

Create external network that will be used for networking.

```
# Create external network
$ docker network create web

# Create external volume
$ docker volume create who-data

# Run docker containers
$ docker-compose up -d
```

For frontend, wait for this output:

```
whoowesme-frontend |
whoowesme-frontend | You can now view whooweme in the browser.
whoowesme-frontend |
whoowesme-frontend |   Local:            http://localhost:8000
whoowesme-frontend |   On Your Network:  http://172.18.0.3:8000
whoowesme-frontend |
whoowesme-frontend | Note that the development build is not optimized.
whoowesme-frontend | To create a production build, use npm run build.
whoowesme-frontend |
```

For API, wait for this output:

```
whoowesme-api         | [Nest] 27   - 10/07/2020, 5:36:54 PM   [NestFactory] Starting Nest application...
whoowesme-api         | [Nest] 27   - 10/07/2020, 5:36:54 PM   [InstanceLoader] AppModule dependencies initialized +70ms
whoowesme-api         | [Nest] 27   - 10/07/2020, 5:36:54 PM   [RoutesResolver] AppController {}: +23ms
whoowesme-api         | [Nest] 27   - 10/07/2020, 5:36:54 PM   [RouterExplorer] Mapped {, GET} route +14ms
whoowesme-api         | [Nest] 27   - 10/07/2020, 5:36:54 PM   [RoutesResolver] CatsController {/cats}: +4ms
whoowesme-api         | [Nest] 27   - 10/07/2020, 5:36:54 PM   [RouterExplorer] Mapped {/cats, GET} route +3ms
whoowesme-api         | [Nest] 27   - 10/07/2020, 5:36:54 PM   [RouterExplorer] Mapped {/cats, POST} route +18ms
whoowesme-api         | [Nest] 27   - 10/07/2020, 5:36:54 PM   [RouterExplorer] Mapped {/cats/docs, GET} route +26ms
whoowesme-api         | [Nest] 27   - 10/07/2020, 5:36:54 PM   [RouterExplorer] Mapped {/cats/:id, GET} route +11ms
whoowesme-api         | [Nest] 27   - 10/07/2020, 5:36:54 PM   [NestApplication] Nest application successfully started +30ms
```

Check again to make sure that all containers are running fine without errors:

```
$ docker ps

CONTAINER ID        IMAGE                    COMMAND                  CREATED             STATUS              PORTS                                        NAMES
3c0bbb41dfcd        traefik:1.5.2-alpine     "/entrypoint.sh --we…"   17 minutes ago      Up 17 minutes       0.0.0.0:80->80/tcp, 0.0.0.0:8080->8080/tcp   whoowesme-web-traefik
c0518e3769bf        whoowesme_who-api        "npm run start:dev"      17 minutes ago      Up 17 minutes       0.0.0.0:32788->5000/tcp                      whoowesme-api
38787f196b73        whoowesme_who-frontend   "npm run start"          17 minutes ago      Up 17 minutes       0.0.0.0:32789->8000/tcp                      whoowesme-frontend
```

[Traefik] dashboard is available at : `http://localhost:8080/dashboard/#/`

#### Frontend: ReactJS

- Check code inside `frontend` folder
- ReactJS
- Antd for components
- Storybook for component development

#### Backend: NestJS
- Check code inside `backend` folder
- NestJS API

#### Database
[todo]


#### Test
[todo]

#### License

MIT

[Traefik](https://doc.traefik.io)

