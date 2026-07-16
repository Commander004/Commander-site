from http.server import HTTPServer, SimpleHTTPRequestHandler
import os

os.chdir("/storage/emulated/0/Commander (site)")

server = HTTPServer(("0.0.0.0", 8000), SimpleHTTPRequestHandler)

print("Server running...")
server.serve_forever()