import building_8_bin from './building-8.bin?url';
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
			"name": "Building_08.001",
			"rotation": [
				0,
				-0.7059691548347473,
				0,
				0.7082425951957703
			],
			"scale": [
				0.5894461870193481,
				0.5894461274147034,
				0.5894461870193481
			],
			"translation": [
				31.287534713745117,
				14.891875267028809,
				46.24223709106445
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
			"name": "Cube.036",
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
			"count": 5973,
			"max": [
				17.251428604125977,
				23.286283493041992,
				21.48693084716797
			],
			"min": [
				-11.968368530273438,
				-7.69442081451416,
				-15.308143615722656
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 5973,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 5973,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 25989,
			"type": "SCALAR"
		},
		{
			"componentType": 5126,
			"count": 16940,
			"max": [
				17.034326553344727,
				14.541481971740723,
				20.94811248779297
			],
			"min": [
				-11.639760971069336,
				-11.156129837036133,
				-14.410353660583496
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 16940,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 16940,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 55308,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 44161,
			"byteOffset": 0
		},
		{
			"buffer": 0,
			"byteLength": 116440,
			"byteOffset": 44164
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
			"byteLength": 160604,
			"uri": building_8_bin
		}
	]
}