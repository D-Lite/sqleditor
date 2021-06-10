<template>
    <!-- component -->
<div class="shadow-4xl bg-white rounded p-2">
    <p class="text-center text-black text-4xl">SQL Editor</p>
    <form action="" method="get">
        <textarea class="w-full px-5 py-5  text-gray-700 h-full resize-none focus:outline-none border-gray-200 border rounded-md" rows="10" cols="55"></textarea>
        <button class="bg-indigo-600 hover:bg-blue-dark text-white font-bold ml-96 py-2 px-4 m-5 rounded">Query</button>

        <div class="specialqueries flex justify-center  align-middle space-x-4">
            <button class="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded hover:bg-gray-200 hover:text-gray-700 ">Select All</button>
            <button class="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded hover:bg-gray-200 hover:text-gray-700 ">Select One</button>
            <button class="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded hover:bg-gray-200 hover:text-gray-700 ">Insert</button>
            <button class="bg-indigo-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded hover:bg-gray-200 hover:text-gray-700 ">Delete One</button>

        </div>
    </form>
</div>
</template>

<style>
    .input {
        transition: border 0.2s ease-in-out;
        min-width: 280px
    }

    .input:focus+.label,
    .input:active+.label,
    .input.filled+.label {
        font-size: .75rem;
        transition: all 0.2s ease-out;
        top: -0.1rem;
        color: #667eea;
    }

    .label {
        transition: all 0.2s ease-out;
        top: 0.4rem;
        left: 0;
    }
</style>

<script>
    var toggleInputContainer = function (input) {
        if (input.value != "") {
            input.classList.add('filled');
        } else {
            input.classList.remove('filled');
        }
    }

    var labels = document.querySelectorAll('.label');
    for (var i = 0; i < labels.length; i++) {
        labels[i].addEventListener('click', function () {
            this.previousElementSibling.focus();
        });
    }

    window.addEventListener("load", function () {
        var inputs = document.getElementsByClassName("input");
        for (var i = 0; i < inputs.length; i++) {
            console.log('looped');
            inputs[i].addEventListener('keyup', function () {
                toggleInputContainer(this);
            });
            toggleInputContainer(inputs[i]);
        }
    });
</script>