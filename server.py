import http.server
import socketserver
import os
import sys

PORT = 3000
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def end_headers(self):
        # Enable CORS and disable caching for instant updates
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-store, must-revalidate')
        super().end_headers()

if __name__ == "__main__":
    os.chdir(DIRECTORY)
    try:
        with socketserver.TCPServer(("", PORT), Handler) as httpd:
            print(f"Serving The GATE Grind prototype at http://localhost:{PORT}")
            sys.stdout.flush()
            httpd.serve_forever()
    except Exception as e:
        print(f"Server error: {e}")
