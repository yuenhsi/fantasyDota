import tornado.ioloop
import tornado.web


class MainHandler(tornado.web.RequestHandler):
    def get(self):
        self.write("Hello, world")


class BuildTeam(tornado.web.RequestHandler):
    def get(self):
        print('we here')
        print(self.get_argument('test'))
        print(self.request)


def make_app():
    return tornado.web.Application([
        (r"/", MainHandler),
        (r"/buildTeam/", BuildTeam)
    ],
        autoreload=True)

if __name__ == "__main__":
    app = make_app()
    app.listen(8888)
    tornado.ioloop.IOLoop.current().start()