import building_5_bin from './building-5.bin?url';
import walls_color_jpg from './walls_color.jpg?url';
import roof_color_jpg from './roof_color.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
		"KHR_materials_emissive_strength",
		"KHR_materials_specular",
		"KHR_materials_ior"
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
			"name": "Building_05.001",
			"rotation": [
				0,
				-1,
				0,
				8.146034247147327e-7
			],
			"scale": [
				0.6160156726837158,
				0.6160156726837158,
				0.6160156726837158
			],
			"translation": [
				-55.89518737792969,
				12.846181869506836,
				-0.23155546188354492
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"emissiveFactor": [
				1,
				1,
				1
			],
			"emissiveTexture": {
				"index": 0
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
					"index": 1
				},
				"metallicFactor": 0,
				"roughnessFactor": 0.968181848526001
			}
		},
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
					"index": 2
				},
				"metallicFactor": 0
			}
		}
	],
	"meshes": [
		{
			"name": "Cube.028",
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
			"source": 0
		},
		{
			"sampler": 0,
			"source": 1
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "walls_color",
			"uri": walls_color_jpg
		},
		{
			"mimeType": "image/jpeg",
			"name": "roof_color",
			"uri": roof_color_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 24424,
			"max": [
				18.860742568969727,
				23.623180389404297,
				14.075394630432129
			],
			"min": [
				-18.489421844482422,
				-14.617533683776855,
				-15.61514949798584
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 24424,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 24424,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 80295,
			"type": "SCALAR"
		},
		{
			"componentType": 5126,
			"count": 7563,
			"max": [
				19.498525619506836,
				23.97916030883789,
				14.713179588317871
			],
			"min": [
				-19.12720489501953,
				-6.485657215118408,
				-16.699983596801758
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 7563,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 7563,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 31608,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 163517,
			"byteOffset": 0
		},
		{
			"buffer": 0,
			"byteLength": 55422,
			"byteOffset": 163520
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
			"byteLength": 218944,
			"uri": building_5_bin
		}
	]
}