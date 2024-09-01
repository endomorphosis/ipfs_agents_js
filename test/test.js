import { libp2pKitJs } from 'libp2p_kit_js';
import { ipfsKitJs } from 'ipfs_kit_js';
import { orbitDbKitJs } from 'orbitdb_kit_js';
import { ipfsAgents } from 'ipfs_agents_js';
import { ipfsModelManagerJs } from 'ipfs_model_manager_js';
import { ipfsTransformersJs } from 'ipfs_transformers_js';
import { ipfsDatasetsJs } from 'ipfs_datasets_js';
import { requireConfig } from "../config/config.js";
import path from "path";
import fs from "fs";
import os from "os";
import { exec, execSync } from "child_process";
import { t } from "tar";

export class test_ipfs_agents_js {
    constructor() {
        this.imports = {};
        this.libp2pKitJs = new libp2pKitJs();
        this.ipfsKitJs = new ipfsKitJs();
        this.orbitDbKitJs = new orbitDbKitJs();
        this.ipfsModelManagerJs = new ipfsModelManagerJs();
        this.ipfsAgentsJs = new ipfsAgents();
        this.ipfsTransformersJs = new ipfsTransformersJs();
        this.ipfsDatasetsJs = new ipfsDatasetsJs();
        this.config = requireConfig();
    }

    async init(libp2p_kit_js, orbitdb_kit_js, ipfs_kit_js, ipfs_agents_js)  {
        let libp2pKitJsType = typeof libp2p_kit_js
        let orbitDbKitJsType = typeof orbitdb_kit_js
        let ipfsKitJsType = typeof ipfs_kit_js 
        let ipfsAgentsJsType = typeof ipfs_agents_js

        if(libp2pKitJsType == 'object'){
            this.libp2pKitJs = libp2p_kit_js;
        }

        if (orbitDbKitJsType === 'object'){
            this.orbitDbKitJs = orbitdb_kit_js;
        }
        if (ipfsKitJsType=== 'object'){
            this.ipfsKitJs = ipfs_kit_js;
        }

        let init_results = {};
        if ( typeof this.ipfsKitJs === 'object' && typeof this.libp2pKitJs === 'object' && typeof this.orbitDbKitJs ){
            try{
                init_results.ipfsHuggingfaceScraperJs = this.ipfs_huggingface_scraper_js.init(this.libp2pKitJs, this.orbitDbKitJs,this.ipfsKitJs)
            }
            catch (e) {
                init_results.ipfsHuggingfaceScraperJs = e
            }
        }
        return init_results;
    }
    
    async test() {
        let test_results = {}
        console.log("Running tests for ipfs_huggingface_scraper_js/main.js");
        console.log("Running tests for ipfs_huggingface_scraper_js/index.js");
        console.log("Running tests for index.js");
        return test_results
    }
}

if (import.meta.url === 'file://' + process.argv[1]) {
    console.log("Running test");
    let test_results = {};
    try{
        const testIpfsAgentsJs = new test_ipfs_agents_js();
        await testIpfsAgentsJs.init().then((init) => {
            test_results.init = init;
            console.log("testIpfsModelManager init: ", init);
            testIpfsAgentsJs.test().then((result) => {
                test_results.results = result;
                console.log("testIpfsModelManager: ", result);
            }).catch((error) => {
                test_results.results = error;
                console.log("testIpfsModelManager error: ", error);
                // throw error;
            });
        }).catch((error) => {
            testIpfsAgentsJs.init = error ;
            console.error("testIpfsModelManager init error: ", error);
            // throw error;
            testIpfsAgentsJs.test().then((result) => {
                test_results.results = result;
                console.log("testIpfsModelManager: ", result);
            }).catch((error) => {
                test_results.results = error;
                console.log("testIpfsModelManager error: ", error);
                // throw error;
            });
        });
        console.log(test_results);
        fs.writeFileSync("./tests/test_results.json", JSON.stringify(test_results, null, 2));
        let testResultsFile = "./tests/README.md";
        let testResults = "";
        for (let key in test_results) {
            testResults += key + "\n";
            testResults += "```json\n";
            testResults += JSON.stringify(test_results[key], null, 2);
            testResults += "\n```\n";
        }
        fs.writeFileSync(testResultsFile, testResults);
        if (Object.keys(test_results).includes("test_results") === false) {
            process.exit(0);
        }
        else{
            process.exit(1);
        }   
    }
    catch(err){
        console.log(err);
        // process.exit(1);
    }   
}