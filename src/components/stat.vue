<template>
    <div class="container">
        <div class="justify-content-center">

            <div class="row">
                <div class="col">
                    <h2 class="mb-5 text-white">Depuis le 31/12/2019</h2>
                </div>
                <div class="col text-right">
                    <button class="btn btn-success" data-toggle="modal" data-target="#AddPoint">
                        <i class="fas fa-plus"></i>
                        Nouveau point
                    </button>
                </div>  
            </div>
            
            <div class="row">
                <div class="col card mr-5 p-0">
                    <div class="row ">
                        <div class="col-3 text-center">
                            <h1>IMC</h1>
                            <h2>24</h2>
                        </div>
                        <div class="col p-0">
                            <trend
                                :data="dataImc"
                                :gradient="['#FF0000', '#00FF0C']"
                                height=100
                                stroke-width="2"
                                auto-draw
                                smooth>
                            </trend>
                        </div>
                    </div>
                </div>
                <div class="col card p-0">
                    <div class="row">
                        <div class="col-4 text-center">
                            <h1>Poids</h1>
                            <h2>80.16 kg</h2>
                        </div>
                        <div class="col p-0">
                            <trend
                                :data="dataPoids"
                                :gradient="['#FF0000', '#00FF0C']"
                                height=100
                                stroke-width="2"
                                auto-draw
                                smooth>
                            </trend>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Modal nouveau point -->
            <div class="modal fade  bd-example-modal-lg" id="AddPoint" tabindex="-1" role="dialog" aria-labelledby="AddPointLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content bg-grey">
                        <div class="modal-header ">
                            <h5 class="modal-title text-black" id="AddPointLabel">Ajout d'un fournisseur</h5>
                            <button type="button" class="close text-black" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body bg-grey">  
                            <form>
                                <div class='row text-black'>
                                    <div class="col  form-group">
                                        <label for="poids">Poids:</label>
                                        <input type="number" class="form-control" id="poids" name="poids">
                                    </div>
                                    <div class="col form-group">
                                        <label for="taille">Taille:</label>
                                        <input type="number" class="form-control" id="taille" name="taille">
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary">Valider</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        data () {
        return {
            dataImc: [28, 27, 27, 26, 26, 25, 25, 25, 26, 29],
            dataPoids: [85, 84.14, 83, 83.65, 82.19, 81.98, 82.16, 80.16, 84.14, 85]
        }
        }
    }
</script>

