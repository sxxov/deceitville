import pumpkin_x1_bin from './pumpkin-x1.bin?url';
import environment_col_jpg from './environment_col.jpg?url';

export default {
	"asset": {
		"generator": "Khronos glTF Blender I/O v3.6.27",
		"version": "2.0"
	},
	"extensionsUsed": [
		"KHR_draco_mesh_compression",
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
			"name": "pumpkin.002",
			"scale": [
				1.2271459102630615,
				1.2271459102630615,
				1.2271459102630615
			],
			"translation": [
				-21.301681518554688,
				5.151021480560303,
				-71.69359588623047
			]
		}
	],
	"materials": [
		{
			"doubleSided": true,
			"extensions": {
				"KHR_materials_specular": {
					"specularColorFactor": [
						0,
						0,
						0
					]
				},
				"KHR_materials_ior": {
					"ior": 1.4500000476837158
				}
			},
			"name": "Folliages",
			"pbrMetallicRoughness": {
				"baseColorTexture": {
					"index": 0
				},
				"metallicFactor": 0
			}
		}
	],
	"meshes": [
		{
			"name": "Sphere.007",
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
				}
			]
		}
	],
	"textures": [
		{
			"sampler": 0,
			"source": 0
		}
	],
	"images": [
		{
			"mimeType": "image/jpeg",
			"name": "environment_col",
			"uri": environment_col_jpg
		}
	],
	"accessors": [
		{
			"componentType": 5126,
			"count": 155,
			"max": [
				1.074637532234192,
				1.62078857421875,
				1.2419816255569458
			],
			"min": [
				-1.071172833442688,
				-0.6190041303634644,
				-1.2357865571975708
			],
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 155,
			"type": "VEC3"
		},
		{
			"componentType": 5126,
			"count": 155,
			"type": "VEC2"
		},
		{
			"componentType": 5123,
			"count": 660,
			"type": "SCALAR"
		}
	],
	"bufferViews": [
		{
			"buffer": 0,
			"byteLength": 1604,
			"byteOffset": 0
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
			"byteLength": 1604,
			"uri": pumpkin_x1_bin
		}
	]
}