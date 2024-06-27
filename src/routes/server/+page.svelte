<div class="h-full m-8 flex">
    <div class="space-y-5 h-[90%] w-full overflow-y-scroll">
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
        <h2 class="h2 py-4"><b>Connection</b></h2>
        <span>
            When a connection is established with the server, it initiates a <b>handshake</b>, it can branch into 2 different directions depending on the team the <b>client</b> is trying to join.
        </span>
        <h3 class="h3">AI:</h3>
        <span>
            <ul class="list-disc pl-5">
                <li>{"<-"} WELCOME</li>
                <li>{"->"} AI_TEAM</li>
                <li>{"<-"}  CONNECTIONS_LEFT</li>
                <li>{"<-"}  X Y</li>
            </ul>
        </span>
        <h3 class="h3">GUI:</h3>
        <span>
            <ul class="list-disc pl-5">
                <li>{"<-"} WELCOME</li>
                <li>{"->"} GRAPHIC</li>
                <li>{"<-"} MSZ</li>
                <li>{"<-"} MCT</li>
                <li>{"<-"} TNA</li>
                <li>{"<-"} PNW (for each player already connected)</li>
            </ul>
        </span>
        <br>
        If the team name is invalid, the server will instantly reply with a <b>ko</b> followed by a newline and close the connection.
        <h1 class="h2 py-4"><b>Map</b></h1>
        <span>
            <b>The map</b> is a <b>table of cells (2 dimensional array)</b> contained within the game structure. Each cell also contains a pointer to the cells at its 4 cardinal directions:
            <ul class="list-disc pl-5">
                <li>North (cell->north)</li>
                <li>East (cell->east)</li>
                <li>South (cell->south)</li>
                <li>West (cell->west)</li>
            </ul>
        </span>
        <h1 class="h2 py-4"><b>Cells</b></h1>
        <span>
            <b>The cells</b> of the map are <b>linked</b> to each other <b>by pointers: "NORTH/SOUTH/EAST/WEST</b>".
            <br/>Each cell contains:
            <ul class="list-disc pl-5">
                <li>an x position</li>
                <li>a y position</li>
                <li>a list of eggs</li>
                <li>a list of items</li>
                <li>and a boolean to indicate whether it has been updated</li>
            </ul>
        </span>
        <h1 class="h2 py-4"><b>Distribution of items</b></h1>
        <span>
            <b>For each item</b>, the program adds the items <b>one by one</b> to <b>random tiles on the map</b>, taking care not to exceed the <b>maximum possible</b> number for each item. This maximum number is <b>calculated</b> according to this formula: <b>"map_width * map_height * density"</b>.
        </span>
        <h1 class="h2 py-4"><b>Eggs</b></h1>
        <span>
            <b>The eggs</b> are <b>distributed in the same way as the items</b>, but they are assigned an <b>ID and a team name</b>. The <b>maximum number of eggs per team</b> at the start of the game is defined with the <b>c flag</b>. Throughout the game, <b>players can lay eggs</b>. This allows them to  <b>connect more</b>.
        </span>
        <h1 class="h2 py-4"><b>Players</b></h1>
        <span>
            <b>The players</b> are contained in a <b>linked list</b> stored within the "game" structure. Each player has a multitude of information and data:
            <ul class="list-disc pl-5">
                <li>such as an ID</li>
                <li>a team name</li>
                <li>a cell</li>
                <li>a direction</li>
                <li>an action cooldown</li>
                <li>a level</li>
                <li>an inventory</li>
                <li>a file descriptor</li>
                <li>an eating cooldown</li>
                <li>a boolean for connection</li>
                <li>another for incantation</li>
                <li>a pointer to the next player in the list</li>
            </ul>
        </span>
    </div>
</div>
