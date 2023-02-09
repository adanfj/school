<script>
	let list = ["Celery Root", "Spaghetti Squash", "Killer Mushrooms"];
	let selected = list[0];
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
	<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
		<symbol id="check-circle-fill" fill="currentColor" viewBox="0 0 16 16">
		  <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
		</symbol>
		<symbol id="info-fill" fill="currentColor" viewBox="0 0 16 16">
		  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm.93-9.412-1 4.705c-.07.34.029.533.304.533.194 0 .487-.07.686-.246l-.088.416c-.287.346-.92.598-1.465.598-.703 0-1.002-.422-.808-1.319l.738-3.468c.064-.293.006-.399-.287-.47l-.451-.081.082-.381 2.29-.287zM8 5.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2z"/>
		</symbol>
		<symbol id="exclamation-triangle-fill" fill="currentColor" viewBox="0 0 16 16">
		  <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
		</symbol>
	  </svg>
</svelte:head>

<section class="row p-4">
	<div class="col-4">
		<h1>Some Favorites</h1>
		<div class="list-group list-group-flush">
			{#each list as element}
				<li
					on:click={() => {
						selected = element;
					}}
					class="list-group-item-action list-group-item {selected ==
					element
						? 'active'
						: ''}"
				>
					{element}
				</li>
			{/each}
			<input
				type="text"
				class="form-control"
				placeholder="Recipient's username"
				aria-label="Recipient's username"
				aria-describedby="basic-addon2"
			/>
			<button type="button" class="btn btn-primary">Search Recipes</button
			>
		</div>
	</div>

	<div class="col">
		<div class="alert alert-danger alert-dismissible fade show" role="alert">
			<svg class="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Danger:"><use xlink:href="#exclamation-triangle-fill"/></svg>
			Eat it eat it eat it...
			<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
		</div>
		<h1>Wild & Wacky Vegetables</h1>
		<blockquote class="blockquote">
			<p class="text-justified" style="text-align: justify;">
				The beet is the most intense of vegetables. The radish, admittedly,
				is more feverish, but the fire of the radish is a cold fire, the
				fire of discontent not of passion. Tomatoes are lusty enough, yet
				there runs through tomatoes an undercurrent of frivolity. Beets are
				deadly serious.
			</p>
			<footer class="blockquote-footer">Tom Robbins</footer>
		</blockquote>
		<h2>Some diseases</h2>
		<table class="table table-bordered table-striped">
			<thead class="border-bottom-2">
				<tr>
					<th>Veggie</th>
					<th>Disease</th>
				</tr>
			</thead>
			<tbody class="table-group-divider">
				<tr>
					<td>Beets</td>
					<td>Beeturia</td>
				</tr>
				<tr>
					<td>Carrots</td>
					<td>Carotenosis</td>
				</tr>
			</tbody>
		</table>	
		<div class="row g-2">
			{#each [["Beets","Beets-Bundle","Don't get your hands dirty"],["Carrots","CarrotDiversityLg","Hands dirty"],["Asparagus","Green_Asparagus","Hands too dirty :)"]] as [title,link,description]}
			<div class="card col-4" >
				<img src="/{link}.jpg" alt="" srcset="" class="card-img-top border p-2 img-fluid img-thumbnail">
				<div class="card-body">
					<h5 class="card-title">{title}</h5>
					<p class="card-text">{description}</p>
				</div>
			</div>
			{/each}
			<!-- <img src="/CarrotDiversityLg.jpg" alt="" srcset="" class="col border-2 p-2">
			<img src="Green_Asparagus.jpg" alt="" srcset="" class="col border-2 p-2"> -->
		</div>
		<p style="text-align: justify;">
			Kale courgette salsify mustard broccoli seakale wakame potato fava
			bean tigernut leek celery spinach avocado cabbage celtuce rutabaga
			kohlrabi. Parsnip pea soko groundnut bitterleaf spring onion. Grape
			dulse rutabaga lentil gram kakadu plum water spinach cabbage lotus
			root.
		</p>
		<p style="text-align: justify;">
			Mung bean quandong kale prairie turnip celery gram zucchini pumpkin
			green bean silver beet chard endive komatsuna eggplant kakadu plum
			radish broccoli. Arugula amaranth fennel wakame peanut garlic
			chickweed. Sorrel jícama quandong kale chickpea water chestnut rock
			melon aubergine lettuce pea azuki bean cress onion sea lettuce
			dandelion nori dulse rutabaga. Coriander napa cabbage bok choy
			carrot kakadu plum brussels sprout bamboo shoot salad okra cucumber
			garlic kombu beet greens cauliflower summer purslane. Artichoke
			daikon horseradish arugula taro catsear kombu rock melon pea sprouts
			collard greens mustard courgette lettuce soko maize plantain.
		</p>
	</div>
</section>
