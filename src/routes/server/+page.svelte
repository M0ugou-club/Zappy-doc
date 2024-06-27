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
        <h1 class="h2 py-4"><b>Map</b></h1>
        <span>
            The map is simply an array of cells contained within the game structure.
        </span>
        <h1 class="h2 py-4"><b>Cells</b></h1>
        <span>
            The cells of the map are linked to each other by pointers: "NORTH/SOUTH/EAST/WEST".
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
            The players are contained in a linked list stored within the "game" structure. Each player has a multitude of information and data:
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
