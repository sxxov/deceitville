import building_15_bin from './building-15.bin?url';
import roof_color_jpg from './roof_color.jpg?url';
import walls_color_jpg from './walls_color.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_specular",
		"KHR_materials_ior",
		"KHR_materials_emissive_strength"
	],
	"extensionsRequired": [
		"KHR_draco_mesh_compression"
	],
	"scene": 0,
	"scenes": [
		{
			"name": "Scene",
			"nodes": [
				0
			]
		}
	],
	"nodes": [
		{
			"mesh": 0,
			"name": "Building_15.001",
			"rotation": [
				0.0019216362852603197,
				0.8857368230819702,
				-0.46416938304901123,
				0.0036668642424046993
			],
			"scale": [
				0.6160156726837158,
				0.616015613079071,
				0.6160157322883606
			],
			"translation": [
				47.765419006347656,
				15.142644882202148,
				29.433422088623047
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_specular": {
					"specularColorFactor": [
						0.366482544268505,
						0.366482544268505,
						0.366482544268505
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "Roof_mat",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 0
				},
				"metallicFactor": 0
			}
		},
		{
			"doubleSided": true,
			"emissiveFactor": [
				1,
				1,
				1
			],
			"emissiveTexture": {
				"index": 1
			},
			"extensions": {
				"KHR_materials_emissive_strength": {
					"emissiveStrength": 4.299999713897705
				},
				"KHR_materials_specular": {
					"specularColorFactor": [
						0.42037705477998155,
						0.42037705477998155,
						0.42037705477998155
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "walls_mat",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 2
				},
				"metallicFactor": 0,
				"roughnessFactor": 0.968181848526001
			}
		}
	],
	"meshes": [
		{
			"name": "Cube.043",
			"primitives": [
				{
					"attributes": {
						"POSITION": 0,
						"NORMAL": 1,
						"TEXCOORD_0": 2
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 0,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 3,
					"material": 0,
					"mode": 4
				},
				{
					"attributes": {
						"POSITION": 4,
						"NORMAL": 5,
						"TEXCOORD_0": 6
					},
					"extensions": {
						"KHR_draco_mesh_compression": {
							"bufferView": 1,
							"attributes": {
								"POSITION": 0,
								"NORMAL": 1,
								"TEXCOORD_0": 2
							}
						}
					},
					"indices": 7,
					"material": 1,
					"mode": 4
				}
			]
		}
	],
	"textures": [
		{
			"sampler": 0,
			"source": 0
		},
		{
			"sampler": 0,
			"source": 1
		},
		{
			"sampler": 0,
			"source": 1
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "roof_color",
			"uri": roof_color_jpg
		},
		{
			"mimeType": "image/jpeg",
			"name": "walls_color",
			"uri": walls_color_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 1443,
			"max": [
				7.417849540710449,
				25.230485916137695,
				-3.8398420810699463
			],
			"min": [
				-7.236606121063232,
				-0.8458104133605957,
				-31.349346160888672
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 1443,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 1443,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 6306,
			"type": "SCALAR"
		},
		{
			"componentType": 5126,
			"count": 12008,
			"max": [
				6.556704521179199,
				24.026960372924805,
				5.855335235595703
			],
			"min": [
				-6.474921226501465,
				-5.938297748565674,
				-30.362653732299805
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 12008,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 12008,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 39831,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 11492,
			"byteOffset": 0
		},
		{
			"buffer": 0,
			"byteLength": 84034,
			"byteOffset": 11492
		}
	],
	"samplers": [
		{
			"magFilter": 9729,
			"minFilter": 9987
		}
	],
	"buffers": [
		{
			"byteLength": 95528,
			"uri": building_15_bin
		}
	]
}