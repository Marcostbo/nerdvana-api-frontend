<template>
    <!-- Button trigger modal -->
    <button type="button" class="mt-2 btn btn-outline-info" data-bs-toggle="modal" data-bs-target="#priceModal">
        <img class="alert-img-btn" src="https://img.icons8.com/nolan/64/alarm.png" alt="alarm"/> Criar Alerta
    </button>

    <!-- Modal -->
    <div class="modal fade" id="priceModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content bg-dark">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Alerta de Preço</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    {{ game.name }}
                    <div class="mb-3">
                        <label class="form-label">Preço Desejado</label>
                        <input type="number" min="0" value="0" step=".01" class="form-control">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-outline-info">
                        <img class="alert-img-btn img-fluid" src="https://img.icons8.com/nolan/64/alarm.png" alt="alarm"/> Criar Alerta
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        game: Object
    },
    data() {
        return {
            desiredPrice: Float32Array
        }
    }
}
</script>

<style scoped>
.alert-img-btn {
  height: 32px;
  width: 32px;
}
</style>