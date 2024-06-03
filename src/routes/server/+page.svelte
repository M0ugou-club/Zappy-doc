<div class="h-full m-8 flex">
    <div class="space-y-5 w-full">
        <h1 class="h1 py-4"><b>Server</b></h1>
        <span>
            The server part is responsible for managing connections between clients and the game. It is written in C and only uses the standard library.
        </span>
        <hr class="!border-t-2" />
        <h2 class="h2 py-4"><b>Select</b></h2>
        <span>
            The management of communication is done using the standard C library function <code class="code">select</code>
        </span>
        <br />
        <br />
        <span>
            Each time a client attempts to connect to the server, a new connection is created, this connection contains a character buffer, each time data is sent from the client to the server, it gets added to this buffer until a \n is found, the buffer is then interpreted by the server and execute its corresponding action if found.
        </span>
    </div>
</div>
