import ipfsModelManagerJs from ipfs_model_manager_js
import ipfsTransformersJS from ipfs_transformers_js
import ipfsDatasetsJs from ipfs_datasets_js
import ipfsAccelerateJS from ipfs_accelerate_js
import libp2pKitJs from libp2p_kit_js
import orbitDBKitJs from orbit_db_kit_js
import ipfsFaissJs from ipfs_faiss_js
import ipfsPailKitJs from ipfs_pail_kit_js
import storachaKitJs from storacha_kit_js
import fireproofDbKitJs from fireproofdb_kit_js

export class ipfsAgentsJs {
    constructor(resources, metadata) {
        this.config = {}
        this.ipfsTransformers = new ipfsTransformers(resources, metadata)
        this.ipfsModelManager = new ipfsModelManager(resources, metadata)
        this.orbitDbKit = new orbitDBKitJs(resources, metadata)
        this.ipfsDatasets = new ipfsDatasetsJs(resources, metadata)
        this.ipfsFaiss = new ipfsFaissJs(resources, metadata)
        this.libp2pKit = new libp2pKitJs(resources, metadata)
        this.ipfsKit = new ipfsKitJs(resources, metadata)
        this.ipfsPailKitJs = new pailKitJs(resources, metadata)
        this.storachaKit = new storachaKitJs(resources, metadata)
        this.fireproofDbKit = new fireproofDbKitJs(resources, metadata)
        this.ipfsAccelerate = new ipfsAccelerateJS(resources, metadata)
    }

    async init () {
        await this.libp2pKit.init()
        await this.libp2pKit.init()
        await this.orbitDbKit.init()
        await this.storachaKit.init()
        await this.fireproofDbKit.init()
        await this.ipfsFaiss.init()
        await this.ipfsModelManager.init(this.libp2pKit, this.ipfsKit, this.orbitDbKit, this.storachaKit, this.fireproofDbKit, this.ipfsFaiss)
        await this.ipfsTransformers.init(this.ipfsModelManager)
        await this.ipfsDatasets.init(this.ipfsModelManager)
        await this.ipfsAccelerate.init(this.ipfsModelManager, his.ipfsTransformers, this.ipfsDatasets)
    }

    async toolboxLs () {

    }

    async toolboxCat () {

    }

    async toolboxAdd () {

    }

    async toolboxRm () {

    }

    async publishTask () {

    }

    async awkTask () {

    }

    async grepTask () {

    }

    async callbashTask () {

    }

    async checkTaskReady () {

    }

    async lsToolplans () {

    }

    async catToolplan () {

    }

    async addToolplan () {

    }

    async rmToolplan () {

    }

    async attestToolResults () {

    }

    async attestToolplan () {

    }


}

export default ipfsAgentsJs