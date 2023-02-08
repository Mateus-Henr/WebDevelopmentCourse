// The "declarations" folder exposes our Motoko code. 
import {dbank} from "../../declarations/dbank"

window.addEventListener("load", async () =>
{
    await updateBalance();
});

document.querySelector("form").addEventListener("submit", async (event) =>
{
    event.preventDefault();

    const button = event.target.querySelector("#submit-btn");

    button.setAttribute("disabled", true);

    const inputAmount = document.getElementById("input-amount").value;
    const outputAmount = document.getElementById("withdrawal-amount").value;

    if (inputAmount.length != 0)
    {
        await dbank.topUp(parseFloat(inputAmount));
    }

    if (outputAmount.length != 0)
    {
        await dbank.withdraw(parseFloat(outputAmount));
    }

    await dbank.compound();
    await updateBalance();

    document.getElementById("input-amount").value = "";
    document.getElementById("withdrawal-amount").value = "";
    button.removeAttribute("disabled");
});

async function updateBalance()
{
    const balance = await dbank.checkBalance();

    document.getElementById("value").innerText = balance.toFixed(2);
}